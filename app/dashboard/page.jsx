"use client";


import { createClient } from '@supabase/supabase-js';
import { useState, useEffect} from 'react';
import supabase from '../config/supabaseconfig';

export default function Page () {
  const [bounties, setBounties] = useState([]);
  const [bounty, setBounty] = useState({ bounty_name: "", bounty_description: "", bounty_prize:""}) 
  const { bounty_name, bounty_description, bounty_prize} = bounty

  useEffect(() =>{
    fetchBounties();
  }, [])

  async function fetchBounties() {
      const { data } = await supabase.from("bounty").select()
      setBounties(data)
      console.log("returned data: ", data)
  }

  async function createBounty(){
    await supabase.from("bounty").insert([
      bounty_name, bounty_description, bounty_prize
    ]).single()
    setBounty({ bounty_name: "", bounty_description: "", bounty_prize: ""})
    fetchBounties()
  }

  return (
    <div className="">
      <input
        placeholder="Name of the challenge/bounty"
        value={bounty_name}
        onChange={e => setBounties({ ...bounty, bounty_name: e.target.value })}
      />
      <input
        placeholder="A description of about the challenge or bounty"
        value={bounty_description}
        onChange={e => setBounties({ ...bounty, bounty_description: e.target.value })}
      />
      <input
        placeholder="Explanation of how the bounty shall be given out"
        value={bounty_prize}
        onChange={e => setBounties({ ...bounty, bounty_prize: e.target.value })}
      />
      <button className='bg-blue color-white' onClick={createBounty}> Create challenge</button>
      {
        bounties.map(bounty =>(
          <div key={bounty.id}>
            <h3>{bounty.bounty_name}</h3>
            <p>{bounty.bounty_description}</p>
            <p>{bounty.bounty_prize}</p>
          </div>
        ))
      }
    </div>

  );
}