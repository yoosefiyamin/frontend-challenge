# Sheypoor frontend-challenge

The task is to implement a Top Tap Navigator

There is a dummy `sdk` package(implemented in the /sdk folder) which exports a `loadData` function. This function returns a `Promise` will be resolved in 3 seconds.
Use it to simulate a request that get listing data. 
Ex:

```
import loadData from 'sdk'

loadData({
  {
    skipped = 0, // start index of list items
    size = 20 // max length of items you will received by calling loadData function
  }
}).then(console.log)

```
Response example

```
{
  total: 2000, // Total size of items
  size: 20,
  skipped: 20,
  items: Array(20)
}
```

The focus should be on code style and the way you approach the problem implementation wise.

### Getting started:

- Fork the repo
- Implement your solution
- Send android apk file and repository url to pendar.safari@gmail.com

Please provide detailed instructions
on how to start the project locally.

Any questions please contact us via email (jobs AT sheypoor.com) :)
