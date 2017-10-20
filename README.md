# water

Watery :ocean: HTML Extra

## Usage

### Media / Social

#### YouTube

YouTube Embed Player

```html
  <youtube-embed src="_videoURL_" width="_width_" height="_height_" />
```

##### Options

* src => YouTube Video Link/Embed URL/Video ID
* width => Width(in _px_) for the video player (defaults to 560px)
* height => Height(in _px_) for the video player (defaults to 315px)
* autoplay => Whether the video will autoplay (defaults to 0), set 1 if autoplays

#### Google Maps

Google Maps Embed

##### Place

```html
  <google-map place="_place_" width="_width_" height="_height_" />
```

##### Options

* place => Place Location (like Taj Mahal)/Coordinates (27.122,75.325)(comma separated)
* width => Width(in _px_) for the video player (defaults to 600px)
* height => Height(in _px_) for the video player (defaults to 450px)
* zoom => initial zoom level of map (defaults to 16) (ranges from 0 to 21)
* map-type => defines the type of map tiles to load (defaults to roadmap) (roadmap/satellite)

##### Directions

```html
  <google-map-dir origin="_origin_" destination="_destination_" width="_width_" height="_height_" />
```

##### Options

* origin => Origin Location (like Taj Mahal)/Coordinates (27.122,75.325)(comma separated)
* destination => Destination Location (like Red Fort)/Coordinates (27.122,75.325)(comma separated)
* width => Width(in _px_) for the video player (defaults to 600px)
* height => Height(in _px_) for the video player (defaults to 450px)
* zoom => initial zoom level of map (defaults to 16) (ranges from 0 to 21)
* map-type => defines the type of map tiles to load (defaults to roadmap) (roadmap/satellite)

## To Do (in dev)

### Basic

* [ ] Grid  
* [ ] Compressed Image
* [ ] Email
* [ ] Telephone
* [ ] Website
* [ ] Card
* [ ] Alerts
* [ ] Badges

### Media / Social

* [X] YouTube
* [ ] Facebook Page/Post
* [ ] Twitter
* [X] Google Maps
