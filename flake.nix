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
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = nixpkgs.legacyPackages."${system}";

      buildDeps = [
        pkgs.pandoc
      ];

      www-kuhree = let
        pname = "www-kuhree";
        version = "1.0.0";
        title = "Khari (kuhree) Johnson";
        umamiSrc = "https://umami.kuhree.com/script.js";
        umamiId = "4d96a606-4cc7-47cc-bcb5-0e001f131adc";
        cssSrc = "https://raw.githubusercontent.com/sindresorhus/github-markdown-css/refs/heads/main/github-markdown.css";
      in
        pkgs.stdenv.mkDerivation {
          inherit pname version;
          src = self;
          nativeBuildInputs = buildDeps;

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
      formatter = pkgs.alejandra;
      packages.default = www-kuhree;
      devShells.default = pkgs.mkShell {
        packages = buildDeps;
      };
    });
}
