React components go through three main stages in their life:

Mounting – when the component appears on screen (it's born 👶)

Updating – when the component changes (it grows or updates 🔄)

Unmounting – when the component is removed from the screen (it’s gone 🧹)

🧱 Class Components – Lifecycle in Simple Words
When you use class-based components, React gives you special functions (called lifecycle methods) that run at different stages.

🟢 Mounting (When component shows for the first time)
constructor() – sets up the initial state

componentDidMount() – runs after the component is added to the screen
✅ You use this to fetch data (API calls), set timers, etc.

🔄 Updating (When props or state changes)
componentDidUpdate() – runs after the component updates
✅ Useful to react to changes in state or props

🔴 Unmounting (When the component is removed)
componentWillUnmount() – runs just before the component disappears
✅ Good place to clean up things like timers, listeners, or API calls

✅ Real-Life Example (Class)
class Example extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Mounted: Component is shown");
  }

  componentDidUpdate() {
    console.log("Updated: State or props changed");
  }

  componentWillUnmount() {
    console.log("Unmounting: Component is going away");
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add
        </button>
      </div>
    );
  }
}





Functional Components – Lifecycle with useEffect
In functional components, we don’t have componentDidMount or componentDidUpdate. Instead, we use a special hook called useEffect() to control when things happen.

📌 useEffect(() => { ... }, [dependencies])
🔹 Run once when component mounts:

useEffect(() => {
  console.log("Component mounted");
}, []);




🔹Run when something (like count) changes:


useEffect(() => {
  console.log("Count changed");
}, [count]);


🔹 Run cleanup when component unmounts:

useEffect(() => {
  return () => {
    console.log("Component will unmount");
  };
}, []);




🧠 Summary Table
Stage	Class Component	Functional Component (useEffect)
Mounting	componentDidMount()	useEffect(() => {...}, [])
Updating	componentDidUpdate()	useEffect(() => {...}, [dep])
Unmounting	componentWillUnmount()	return () => {...} inside useEffect
