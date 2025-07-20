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
        title = "Khari (kuhree) Johnson";
        umamiSrc = "https://umami.kuhree.com/script.js";
        umamiId = "4d96a606-4cc7-47cc-bcb5-0e001f131adc";
        cssSrc = "https://raw.githubusercontent.com/sindresorhus/github-markdown-css/refs/heads/main/github-markdown.css";
      in
        pkgs.stdenv.mkDerivation {
          pname = "www-kuhree";
          version = "1.0.0";
          src = self;
          doCheck = true;

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
            runHook preInstall

            mkdir -p $out
            cp index.html $out/

            runHook postInstall
          '';

          checkPhase = ''
            runHook preCheck

            test -f public/index.html
            echo "✅ Build looks successful"

            runHook postCheck
          '';
        };
    in {
      packages.default = www-kuhree;

      formatter = pkgs.alejandra;

      checks.lint =
        pkgs.runCommand "check-lint" {
          buildInputs = [pkgs.nil];
        } ''
          find ${self} -type f -name "*.nix" | xargs -I {} ${pkgs.nil}/bin/nil diagnostics {}
          touch $out
        '';

      checks.fmt =
        pkgs.runCommand "check-fmt" {
          buildInputs = [pkgs.alejandra];
        } ''
          alejandra --check ${self}
          touch $out
        '';

      devShells.default = pkgs.mkShell {
        packages = buildDeps;
      };
    });
}
