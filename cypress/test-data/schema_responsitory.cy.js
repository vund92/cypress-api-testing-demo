let schema1 = {
    "type": "object",
    "required": [
        "batchcomplete",
        "continue",
        "query"
    ],
    "properties": {
        "batchcomplete": {
            "type": "string"
        },
        "continue": {
            "type": "object",
            "required": [
                "sroffset",
                "continue"
            ],
            "properties": {
                "sroffset": {
                    "type": "integer"
                },
                "continue": {
                    "type": "string"
                }
            }
        },
        "query": {
            "type": "object",
            "required": [
                "searchinfo",
                "search"
            ],
            "properties": {
                "searchinfo": {
                    "type": "object",
                    "required": [
                        "totalhits"
                    ],
                    "properties": {
                        "totalhits": {
                            "type": "integer"
                        }
                    }
                },
                "search": {
                    "type": "array"
                }
            }
        }
    }
}

let schema2 = {
    "type": "object",
    "required": [
        "batchcomplete",
        "continue",
        "query"
    ],
    "properties": {
        "batchcomplete": {
            "type": "boolean"
        },
        "continue": {
            "type": "object",
            "required": [
                "sroffset",
                "continue"
            ],
            "properties": {
                "sroffset": {
                    "type": "integer"
                },
                "continue": {
                    "type": "string"
                }
            }
        },
        "query": {
            "type": "object",
            "required": [
                "searchinfo",
                "search"
            ],
            "properties": {
                "searchinfo": {
                    "type": "object",
                    "required": [
                        "totalhits"
                    ],
                    "properties": {
                        "totalhits": {
                            "type": "integer"
                        }
                    }
                },
                "search": {
                    "type": "array"
                }
            }
        }
    }
}

export {schema1, schema2};