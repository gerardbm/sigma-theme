# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "sigma-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Gerard"]
  spec.email         = [""]

  spec.summary       = "A fast and SEO-friendly theme for Jekyll."
  spec.homepage      = "https://github.com/gerardbm/sigma-theme.git"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2.2"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.17.0"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4.0"
  spec.add_runtime_dependency "jekyll-data", "~> 1.1.1"

  spec.add_development_dependency "bundler", "~> 2.1.2"
  spec.add_development_dependency "rake", "~> 13.0.6"
end
