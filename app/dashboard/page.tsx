


// import { createClient } from '@supabase/supabase-js';

import supabase from '../config/client';

export default async function Page () {
  // const [bounties, setBounties] = useState<any>();
  // const [loading, setLoading] = useState<boolean>(true);
  // const [bounty, setBounty] = useState({ bounty_name: "", bounty_description: "", bounty_prize:""}) 
  // const { bounty_name, bounty_description, bounty_prize} = bounty

  // useEffect(() =>{
  //   fetchBounties();
  //   // setLoading(false);
  // }, [])


  // async function createBounty(){
  //   await supabase.from("bounty").insert([
  //     bounty_name, bounty_description, bounty_prize
  //   ]).single()
  //   setBounty({ bounty_name: "", bounty_description: "", bounty_prize: ""})
  //   fetchBounties()
  // }

  
    // <div className="">
      {/* <input
        placeholder="Name of the challenge/bounty"
        value={bounty_name}
        onChange={e => setBounties({ ... bounty, bounty_name: e.target.value })}
      />
      <input
        placeholder="A description of about the challenge or bounty"
        value={bounty_description}
        onChange={e => setBounties({ ... bounty, bounty_description: e.target.value })}
      />
      <input
        placeholder="Explanation of how the bounty shall be given out"
        value={bounty_prize}
        onChange={e => setBounties({ ... bounty, bounty_prize: e.target.value })}
      /> */}
      {/* <button className='bg-blue-500 text-white' onClick={createBounty}> Create challenge</button> */}
      {
      
    }
      {/* : {
        bounties.map(bounty =>(
          <div key={bounty.id}>
            <h3>{bounty.bounty_name}</h3>
            <p>{bounty.bounty_description}</p>
            <p>{bounty.bounty_prize}</p>
          </div>
        ))
      } */}
    // </div>
    const { data: bounties } = await supabase
      .from("bounties")
      .select('bounty_id, bounty_name, bounty_description, bounty_prize')
    
    
    return (
      <>
      <div className="flex font-sans">
  <div className="flex-none w-48 relative">
    <img src="/classic-utility-jacket.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
  </div>
  <form className="flex-auto p-6">
    <div className="flex flex-wrap">
      <h1 className="flex-auto text-lg font-semibold text-slate-900">
        Utility Jacket
      </h1>
      <div className="text-lg font-semibold text-slate-500">
        $110.00
      </div>
      <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        In stock
      </div>
    </div>
    <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div className="space-x-2 flex text-sm">
        <label>
          <input className="sr-only peer" name="size" type="radio" value="xs" checked />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XS
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="s" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            S
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="m" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            M
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="l" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            L
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="xl" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XL
          </div>
        </label>
      </div>
    </div>
    <div className="flex space-x-4 mb-6 text-sm font-medium">
      <div className="flex-auto flex space-x-4">
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Buy now
        </button>
        <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
          Add to bag
        </button>
      </div>
      <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p className="text-sm text-slate-700">
      Free shipping on all continental US orders.
    </p>
  </form>
</div>

     
      {bounties?.map(bounty => (
        <div className='p-4 border-b border-gray-400' key={bounty.bounty_id}>
          <h1 className='text-2xl font-bold mb-4 '>{bounty.bounty_name}</h1>
          <p className='p-2 text-ml'>{bounty.bounty_description}</p>
          <p className='p-2 text-xl'>${bounty.bounty_prize}</p>
        </div>
      ))}
      </>
    )

  
}