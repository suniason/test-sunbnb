# Setting up the Environment for Laravel

This guide will walk you through the process of setting up the development environment, including installing dependencies and configuring the project.

## Prerequisites

-   PHP >=8.1
-   Composer
-   Visual Studio Code (optional but recommended)

## Getting Started

1. Navigate to the project directory and run the following command to install the required dependencies using Composer:

```
composer install
```

2. To run `Laravel Pint` on save, Go to the `Extensions` in vscode and install [Laravel Pint by Open Southerners](https://marketplace.visualstudio.com/items?itemName=open-southeners.laravel-pint). Then, create a `.vscode` folder in the root of backend folder and add the following files:
    - `extensions.json`
    - `settings.json`

In the `extension.json`, add this:

```
{
"recommendations": ["open-southeners.laravel-pint"],
"unwantedRecommendations": []
}
```

In the `settings.json`, add this:

```
{
	"laravel-pint.enable": true,
	"[php]": {
		"editor.defaultFormatter": "open-southeners.laravel-pint",
		"editor.formatOnSave": true
	}
}
```
