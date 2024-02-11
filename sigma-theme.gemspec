# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "sigma-theme"
  spec.version       = "4.1.5"
  spec.authors       = ["Gerard"]
  spec.email         = [""]

  spec.summary       = "A fast and SEO-friendly theme for Jekyll."
  spec.homepage      = "https://github.com/gerardbm/sigma-theme.git"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll"
  spec.add_runtime_dependency "jekyll-feed"
  spec.add_runtime_dependency "jekyll-sitemap"
  spec.add_runtime_dependency "jekyll-data"

  spec.add_development_dependency "bundler"
  spec.add_development_dependency "rake"
end
