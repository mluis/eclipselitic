# eclipselitic

```www / webcams / webcams.json``` is where the model is

schema

```
{
  "webcams": [{
    "title": "string",
    "urls": [{
      "youtube": boolean,
      "type": "string",
      "url": "string",
      "lng": "number",
      "lat": "number"
    }]
  }],
  "remote": [ "string" ]
}
```
    
note:
  type: "image" or "video"
  url:  http(s) only

example

```
{
  "webcams": [{
    "title": "Eclipselitic Place Title",
    "urls": [{
      "type": "image",
      "url": "http://place-is-this.org/foo/bar.jpg",
      "lng": "-25.1234",
      "lat": "37.1234"
    }]
  }],
  "remote": [ "http://endpoint-for-webcam-raw-json-array-content.url/" ]
}
```

```www / index.html``` is where the client will be

development

```
	cd www/
	bower install
	python3 -m http.server
	open browser on http://localhost:8000
```


share webcams online to watch the solar eclipse, please PR

if you know about webcams near you, try those first then spread the word :-)
