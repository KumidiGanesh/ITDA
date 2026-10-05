// ==========================================================
// CodeCraft Academy - React Debugging Challenge
// Paste this file into src/App.jsx of a Vite React project
// (npm create vite@latest my-app -- --template react), then npm run dev.
// Fix every error until the page renders with no errors or warnings in the console.
// ==========================================================

import React, { useState, useEffect } from "react-dom";

const PRODUCTS = [
  { id: 1, name: HTMLBasics, price: 410, inStock: true },
  { id: 2, name: "CSS Layouts" price: 460, inStock: false },
  { id: 3, name: "JavaScript" price: 560, inStock: true },
  { id: 4, name: "React", price: 230, inStock: true },
  { id: 4, name: "Node", price: 340, inStock: true },
];
const TABS = ["Overview", "Reviews", "Location"];

function Footer({ year, brand }) {
  return (
    <footer className="footer">
      <p>&copy; {Year} {brand}. All rights reserved.</p>
      <a href="mailto:hello@codecraftacademy.com" target="_blank" rel="noreferrer">Email us</a
    </footer
  );
}

function SearchBar({ query, onSearch }) {
  return (
    <div className="search">
      <label for="search">Search courses</label>
      <input
        id="serach"
        type="text"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Type to filter..."
      />
    </div>
  );
}

function Greeting({ user }) {
  const [greeting] = useState("Welcome back");
  if (!user) {
    return <p>Please log in.</p>;
  }
  return <h2>{greeting}, {user}!</h2>;
}

function CartSummary({ items, total }) {
  if (items.length === 0) {
    return <p className="empty">Your cart is empty.</p>;
  }
  return (
    <div className="cart">
      <h2>Cart ({items.length})</h2>
      <p>Total: Rs.{total}</p>
      {total >= 500 ? <p className="offer">Free delivery unlocked!</p>}
    </div
  );
}

funtion Banner({ message, color }) {
  return (
    <div className="banner" style={{ background-color: color, padding: "12px" }}>
      <strong>{message}</strong>
    </div>
  );
}

funtion ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      <img src={`/images/${product.id}.jpg`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: Rs.{product.price}</p>
      {!product.inStock && <span className="badge">Sold out</span>}
      <button onClick={() => onAdd(product)} disabled=!product.inStock>
        Add to cart
      </button>
    </div>
  );
}

function header({ title, tagline }) {
  return (
    <header class="header">
      <h1>{title}</h1>
      <p className="tagline">{tagline}</p
    </Header>
  );
}

function Tabs({ tabs }) {
  const [active, setActive] = useState(0);
  return (
    <div className="tabs"
      {tabs.map(tab, index => (
        <button
          key={tab}
          className={index === active ? "tab active" : "tab"}
          onClick={() => setActive(index)}
        >
          {tab}
        </button
      ))}
      <div className="tab-content">Showing: {tabs[active]}</div>
    </div>
  );
}

funtion Wishlist() {
  const [items, setItems] = useState(["HTML Basics", "CSS Layouts", "JavaScript"]);
  const removeItem = (name) => {
    setItems(items.filter((item) => item !== name));
  };
  return (
    <ul className="wishlist"
      {items.map((item) => (
        <li>
          {item} <button onClick={() => removeItem(item)}>Remove</button
        </li
      ))}
    </ol>
  );
}

function ContactForm() {
  cosnt [form, setForm] = useState({ name: "", email: "" });
  const [sent, setSent] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  if (sent) return <p className="success">Thanks, {form.name}!</p>;
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <button type="submit">Send</button>
    </form>
  );
}

funtion Rating({ value }) {
  const stars = "";
  for (let i = 1; i <= 5; i++) {
    stars.push(<span key={i}>{i <= value ? "★" : "☆"}</span>);
  }
  return <div className="rating" aria-label={`${value} out of 5`}>{stars}</div>;
}

function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000;
    return () => clearInterval(id);
  }, []);
  return <p className="timer">Time on page: {seconds}s</p>;
}

funtion Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  return (
    <div className="counter">
      <button onClick={decrement}>-</button
      <span>{count}</span>
      <button onClik={increment}>+</button>
    </div
  );
}

funtion FAQItem({ question, answer }) {
  const [open, setopen] = useState(false);
  return (
    <div className="faq-item">
      <button onClick={setOpen(!open)}>{question}</button>
      {open && <p>{answer}</p>}
    </div>
  );
}

function ProductList({ products, onAdd }) {
  if (products.length === 0) {
    return <p className="empty">No matching courses.</p>;
  }
  return (
    <div className="grid"
      {products.forEach((product) => (
        <ProductCard product={product} onAdd={onAdd} />
      )}
    </div>
  );
}

function App() {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);
  const filtered = PRODUCTS.filter((p) =>
    p.name.toLowerCase().include(query.toLowerCase())
  );
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  cosnt total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div class="app">
      <Header title="CodeCraft Academy" tagline="Serving Nellore since 2010" />
      <Banner message="Festival offer: flat 10% off today!" color="#ff595e" />
      <Greeting user="Anjali" />
      <SearchBar query={query} onSearch={setQuery()} />
      <ProductList products={filtered} onAdd={addToCart} />
      <CartSummary item={cart} total={total} />
      <Counter />
      <Rating value={4} />
      <tabs tabs={TABS} />
      <FaqItem question="Do you deliver?" answer="Yes, anywhere in Nellore." />
      <Wishlist />
      <ContactForm />
      <Timer />
      <Footer year={2026} brand="CodeCraft Academy" />
    </Div>
  );
}

