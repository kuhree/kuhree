{
  description = "kuhree.com";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs =
    {
      self,
      nixpkgs,
    }:
    let
      supportedSystems = [
        "x86_64-linux"
        "aarch64-linux"
      ];

      # See: https://ayats.org/blog/no-flake-utils
      forAllSystems =
        fn: nixpkgs.lib.genAttrs supportedSystems (system: fn nixpkgs.legacyPackages.${system});
    in
    rec {
      hydraJobs = {
        inherit (self) formatter devShells packages;
      };

      devShells = forAllSystems (pkgs: {
        default = pkgs.mkShell {
          packages = [
            pkgs.pandoc
            pkgs.nixfmt-rfc-style
            pkgs.prettier
          ];
        };
      });

      formatter = forAllSystems (
        pkgs:
        pkgs.treefmt.withConfig {
          runtimeInputs = [
            pkgs.nixfmt-rfc-style
            pkgs.prettier
          ];

          settings.no-cache = true;
          settings.on-unmatched = "info";
          settings.formatter.nixfmt = {
            command = "nixfmt";
            includes = [ "*.nix" ];
          };
          settings.formatter.prettier = {
            command = "prettier";
            includes = [ "*.md" ];
            options = [ "--write" ];
          };
        }
      );

      packages = forAllSystems (pkgs: {
        default =
          let
            title = "Khari (kuhree) Johnson";
            rybbitSrc = "https://rybbit.kuhree.com/api/script.js";
            rybbitSiteId = "ee76db1ec098";
            cssSrc = "https://raw.githubusercontent.com/sindresorhus/github-markdown-css/refs/heads/main/github-markdown.css";
          in
          pkgs.stdenv.mkDerivation {
            pname = "www-kuhree";
            version = builtins.substring 0 8 (self.lastModifiedDate or self.lastModified or "19700101");
            src = self;
            doCheck = true;

            nativeBuildInputs = [
              pkgs.pandoc
            ];

            buildPhase = ''
              echo '<style> body { max-width: 80ch; margin: 0 auto; } </style>' > style.html
              echo '<script defer src="${rybbitSrc}" data-site-id="${rybbitSiteId}"></script>' > scripts.html

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

              test -f index.html
              echo "✅ Build looks successful"

              runHook postCheck
            '';
          };
      });
    };
}
