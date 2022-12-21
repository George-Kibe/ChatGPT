import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(25);
  const [priceMin, setPriceMin] = useState(25);
  const [priceMax, setPriceMax] = useState(100);
  const [hobbies, setHobbies] = useState("");
  const [loading, setLoading] = useState(false)

  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    if(loading){return}
    setLoading(true)

    try{
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceMin, priceMax, gender, age, hobbies }),
      });
      const data = await response.json();
      console.log(data)
      setResult(data.result.replaceAll("\n", "<br />"));

    }catch(error){
      alert("Failed to generate gift ideas", error)
    } finally{
      setLoading(false)
    }
  }

  return (
    <div>
      <Head>
        <title>Christmas Gifts Generator  🎁 💡</title>
      </Head>

      <main className={styles.main}>
        <img src="" className={styles.icon} />
        <h3>Christmas Gift Generator  🎁 💡</h3>
        <form onSubmit={onSubmit}>
          <label>For who is the giftee?</label>
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="man">Man</option>
            <option value="woman">Woman</option>
          </select>

          <label>Age</label>
          <input
            type="number"
            min={1}
            max={99}
            name="age"
            placeholder="Enter the age"
            value={age}
            onChange={(e) => setAge(Number.parseInt(e.target.value))}
          />

          <label>Price from</label>
          <input
            type="number"
            min={1}
            name="priceMin"
            placeholder="Enter the minimum price"
            value={priceMin}
            onChange={(e) => setPriceMin(Number.parseInt(e.target.value))}
          />

          <label>Price to</label>
          <input
            type="number"
            min={1}
            name="priceMax"
            placeholder="Enter the maximum price"
            value={priceMax}
            onChange={(e) => setPriceMax(Number.parseInt(e.target.value))}
          />

          <label>Hobbies</label>
          <input
            type="text"
            name="hobbies"
            placeholder="Enter the hobbies"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
          <input type="submit" value="Generate gift ideas" />
        </form>
        {loading && (
          <div>
            <h3>Looking for the best gift ideas 🎁 💡</h3>
            <img src="/loading.gif" className={styles.loading} />
          </div>
        )}
        { result && (
          <div className={styles.result}
            dangerouslySetInnerHTML={{__html:result}}
          />
        )}        
      </main>
    </div>
  );
}