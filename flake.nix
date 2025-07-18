{
  description = "kuhree.com";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }: let
    pname = "www-kuhree";
    version = "1.0.0";

    title = "Khari (kuhree) Johnson";
    umamiSrc = "https://umami.kuhree.com/script.js";
    umamiId = "4d96a606-4cc7-47cc-bcb5-0e001f131adc";
    cssSrc = "https://raw.githubusercontent.com/sindresorhus/github-markdown-css/refs/heads/main/github-markdown.css";
  in
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = nixpkgs.legacyPackages."${system}";

      www-kuhree = pkgs.stdenv.mkDerivation {
        inherit pname version;
        src = self;

        nativeBuildInputs = [pkgs.pandoc];

        buildPhase = ''
          echo '<style> body { max-width: 80ch; margin: 0 auto; } </style>' > style.html
          echo '<script defer src="${umamiSrc}" data-website-id="${umamiId}"></script>' > scripts.html

          pandoc \
            --standalone \
            --metadata title="${title}" \
            --include-in-header="scripts.html" \
            --include-in-header="style.html" \
            --css="${cssSrc}" \
            --embed-resources=true \
            --from=gfm \
            --to=html \
            --output=index.html \
            ${self}/README.md
        '';

        installPhase = ''
          mkdir -p $out
          cp index.html $out/
        '';

        checkPhase = ''
          test -f public/index.html
          echo "✅ Build looks successful"
        '';
      };
    in {
      devShells.default = pkgs.mkShell {
        packages = [pkgs.pandoc];
        shellHook = ''
          echo "Run: pandoc to rebuild"
        '';
      };

      packages.default = www-kuhree;
    });
}
