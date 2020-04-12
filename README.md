# Bundle Winston

The Winston bundle adds the essential logging service to your Kolaz application.

## Prerequisites

This version of Winston bundle requires Kolaz 0.1.1.

## Installation

### Step 1: Download

```shell script
npm install kolaz-bundle-winston
```

### Step 2: Enable
```ecmascript 6
import { WinstonLogger } from "kolaz-bundle-winston";

export class App extends BaseKernel {
    registerBundles() {
        return [
            // ...
            new WinstonLogger()
            // ...
        ];
    }
}
```

### Step 3: Configure
```json5
{
    // ...
    "log": {
        "console": {
            "level": "debug",
            "silent": false
        },
        "sumologic": {
            "level": "info",
            "silent": true, // Set this value to false to enable SumoLogic transport
            "ssl": true,
            "host": "<HOST>",
            "path": "<PATH>" 

        },
        "logentries": {
            "level": "info",
            "silent": true, // Set this value to false to enable LogEntries transport
            "ssl": true,
            "host": "<HOST>",
            "path": "<PATH>"
        }
    }
    // ...
}
```