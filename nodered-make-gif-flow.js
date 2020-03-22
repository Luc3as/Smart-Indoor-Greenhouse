[
    {
        "id": "89d647c2.44d9f8",
        "type": "tab",
        "label": "Greenhouse timelapse",
        "disabled": false,
        "info": ""
    },
    {
        "id": "305f5cfa.9b4524",
        "type": "animate-gif",
        "z": "89d647c2.44d9f8",
        "delay": "100",
        "dimensionX": "1024",
        "dimensionY": "768",
        "quality": "90",
        "repeat": true,
        "x": 790,
        "y": 140,
        "wires": [
            [
                "c6d3bb82.6e0e68",
                "917e6cc3.e2872"
            ]
        ]
    },
    {
        "id": "c6d3bb82.6e0e68",
        "type": "image",
        "z": "89d647c2.44d9f8",
        "name": "",
        "width": 160,
        "data": "payload",
        "dataType": "msg",
        "thumbnail": false,
        "active": false,
        "x": 1040,
        "y": 220,
        "wires": []
    },
    {
        "id": "10e9b1d9.dbe8ce",
        "type": "inject",
        "z": "89d647c2.44d9f8",
        "name": "Last 48 hours",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "0 7-20 * * *",
        "once": false,
        "onceDelay": 0.1,
        "x": 140,
        "y": 140,
        "wires": [
            [
                "1282bc67.4b9274"
            ]
        ]
    },
    {
        "id": "1282bc67.4b9274",
        "type": "fs-file-lister",
        "z": "89d647c2.44d9f8",
        "name": "",
        "start": "/config/www/greenhouse-timelapse/",
        "pattern": "*",
        "folders": "*",
        "hidden": true,
        "lstype": "files",
        "path": true,
        "single": true,
        "depth": 0,
        "stat": false,
        "showWarnings": true,
        "x": 420,
        "y": 140,
        "wires": [
            [
                "2cb55d15.f7fad2"
            ]
        ]
    },
    {
        "id": "2cb55d15.f7fad2",
        "type": "function",
        "z": "89d647c2.44d9f8",
        "name": "last 48 hours",
        "func": "msg.payload = msg.payload.slice(Math.max(msg.payload.length - 48, 0));\nmsg.filename = \"/config/www/greenhouse-timelapse/gifs/last-48-hours.gif\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 590,
        "y": 140,
        "wires": [
            [
                "305f5cfa.9b4524",
                "5d6661a2.f41ed"
            ]
        ]
    },
    {
        "id": "5d6661a2.f41ed",
        "type": "debug",
        "z": "89d647c2.44d9f8",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 790,
        "y": 80,
        "wires": []
    },
    {
        "id": "917e6cc3.e2872",
        "type": "file",
        "z": "89d647c2.44d9f8",
        "name": "Save final GIF",
        "filename": "",
        "appendNewline": true,
        "createDir": true,
        "overwriteFile": "true",
        "encoding": "none",
        "x": 1040,
        "y": 60,
        "wires": [
            [
                "7ffbaf2a.43cab"
            ]
        ]
    },
    {
        "id": "7ffbaf2a.43cab",
        "type": "debug",
        "z": "89d647c2.44d9f8",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 1230,
        "y": 60,
        "wires": []
    },
    {
        "id": "8c836dcf.2a643",
        "type": "function",
        "z": "89d647c2.44d9f8",
        "name": "last week",
        "func": "msg.payload = msg.payload.slice(Math.max(msg.payload.length - 98, 0));\nmsg.filename = \"/config/www/greenhouse-timelapse/gifs/last-week.gif\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 580,
        "y": 220,
        "wires": [
            [
                "5d6661a2.f41ed",
                "9856263d.270008"
            ]
        ]
    },
    {
        "id": "376b86b5.6d148a",
        "type": "fs-file-lister",
        "z": "89d647c2.44d9f8",
        "name": "",
        "start": "/config/www/greenhouse-timelapse/",
        "pattern": "*",
        "folders": "*",
        "hidden": true,
        "lstype": "files",
        "path": true,
        "single": true,
        "depth": 0,
        "stat": false,
        "showWarnings": true,
        "x": 420,
        "y": 220,
        "wires": [
            [
                "8c836dcf.2a643"
            ]
        ]
    },
    {
        "id": "2ef59df9.b3d562",
        "type": "inject",
        "z": "89d647c2.44d9f8",
        "name": "Last week",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "15 21 * * *",
        "once": false,
        "onceDelay": 0.1,
        "x": 130,
        "y": 220,
        "wires": [
            [
                "376b86b5.6d148a"
            ]
        ]
    },
    {
        "id": "9856263d.270008",
        "type": "animate-gif",
        "z": "89d647c2.44d9f8",
        "delay": "100",
        "dimensionX": "1024",
        "dimensionY": "768",
        "quality": "90",
        "repeat": true,
        "x": 790,
        "y": 220,
        "wires": [
            [
                "917e6cc3.e2872",
                "c6d3bb82.6e0e68"
            ]
        ]
    },
    {
        "id": "1fb0dc05.ec2504",
        "type": "function",
        "z": "89d647c2.44d9f8",
        "name": "last month",
        "func": "msg.payload = msg.payload.slice(Math.max(msg.payload.length - 420, 0));\nmsg.filename = \"/config/www/greenhouse-timelapse/gifs/last-month.gif\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 590,
        "y": 320,
        "wires": [
            [
                "67ffba05.6db384"
            ]
        ]
    },
    {
        "id": "7a258d74.8a31d4",
        "type": "fs-file-lister",
        "z": "89d647c2.44d9f8",
        "name": "",
        "start": "/config/www/greenhouse-timelapse/",
        "pattern": "*",
        "folders": "*",
        "hidden": true,
        "lstype": "files",
        "path": true,
        "single": true,
        "depth": 0,
        "stat": false,
        "showWarnings": true,
        "x": 420,
        "y": 320,
        "wires": [
            [
                "1fb0dc05.ec2504"
            ]
        ]
    },
    {
        "id": "67ffba05.6db384",
        "type": "animate-gif",
        "z": "89d647c2.44d9f8",
        "delay": "100",
        "dimensionX": "800",
        "dimensionY": "600",
        "quality": "90",
        "repeat": true,
        "x": 790,
        "y": 320,
        "wires": [
            [
                "c6d3bb82.6e0e68",
                "917e6cc3.e2872"
            ]
        ]
    },
    {
        "id": "92f40d77.b0567",
        "type": "inject",
        "z": "89d647c2.44d9f8",
        "name": "Last month",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "40 21 * * *",
        "once": false,
        "onceDelay": 0.1,
        "x": 130,
        "y": 320,
        "wires": [
            [
                "7a258d74.8a31d4"
            ]
        ]
    }
]