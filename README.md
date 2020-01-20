# Sample project

# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]


## [2.0.0] - 2020-01-20

### Added

- Structure and practice for handling recurring jobs using npm glob package.
- Use database connection as promise which must resolve before app routes and other config can be completed.
- Use glob to handle initialization of all models so we can use database transactions.

## [1.0.0] - 2019-04-15

### Added

- Awilix for Dependency Injection
- Mocha and Chai for testing
- Simple Mock for mocking
- EsLint with airbnb linting