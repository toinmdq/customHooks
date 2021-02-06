# useCounter Hook

## How to use


```javascript
// parameters
const initialCount = 0; // default & optional

const limit = {
	min: null,
	max: null
}; // default & optional

// call hook
const { counter, increment, decrement, reset } = useCounter( initialCount, limit );

console.log( counter ); // 0
increment(8); // +8
console.log( counter ); // 8
decrement(3); // -3
console.log( counter ); // 5
increment(); // +1
console.log( counter ); // 6
reset(); // default
console.log( counter ); // 0
 
```


