import { useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const pay = async () => {
    const res = await fetch("/api/pay", {
      method: "POST",
      body: JSON.stringify({ name, price }),
    });

    const data = await res.json();

    if (data.link) {
      window.location.href = data.link;
    } else {
      alert("Erreur paiement");
    }
  };

  return (
    <div style={{padding:20}}>
      <h2>Dashboard</h2>

      <input placeholder="Produit" onChange={e=>setName(e.target.value)} />
      <br /><br />
      <input placeholder="Prix" onChange={e=>setPrice(e.target.value)} />
      <br /><br />

      <button onClick={pay}>Payer</button>
    </div>
  );
}
