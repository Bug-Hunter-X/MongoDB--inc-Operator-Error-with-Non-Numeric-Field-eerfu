```javascript
// Correct use of $inc operator with numeric field
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { myNumericField: 1 } });

// Alternative: handle non-numeric case
db.collection('myCollection').findOneAndUpdate(
  {_id: 1},
  {$inc: {myNumericField: 1}},
  {upsert: true, returnOriginal: false}
)
```