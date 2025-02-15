import { useCallback, useEffect, useRef, useState } from 'react'
import './index.css'
function App() {

  const [bgColor, setBgColor] = useState('#FFFFFF');
  const character1 = useRef('');
  const character2 = useRef('');
  const character3 = useRef('');
  const character4 = useRef('');

  useEffect(() => {
    character1.current.focus();
  }, [])

  const onFocus = useCallback((e, ref) => {
    if (e.keyCode !== 8) {
      ref.current.focus();
    }
  }, []);

  const onKeyDown = (e, curr, prev) => {
    if (e.keyCode === 8) {
      curr.current.value = '';
      setTimeout(() => {
        prev?.current.focus();
      }, 100)
    }
  };

  return (
    <div style={{ backgroundColor: bgColor }}>
      <div className='flex justify-center p-[20px]'>
        <div className='border-2 h-[500px] w-[500px]'>
          <div className='flex bg-cyan-200 h-[40%] w-full justify-center items-end'>
            <p className='p-[10%] rounded-full bg-slate-300'>My Image</p>
          </div>
          <div className='h-[40%] w-full p-[60px] border-b'>
            <div className='flex justify-center text-2xl'>
              <p className='font-bold'>Aimal Khan</p>
              <p className='ml-[2px] text-gray-500'>78</p>
            </div>
            <p className='flex justify-center text-gray-500'>Columbus</p>
            <div className='flex items-center justify-center mt-[10px]'>
              <p className=''>Enter OTP: </p>
              <div className='ml-[2px]'>
                <input ref={character1} onInput={(e) => onFocus(e, character2)} onKeyDown={(e) => onKeyDown(e, character1, null)} className='rounded border w-[25px] p-[2px] ml-[2px]' type='text' />
                <input ref={character2} onInput={(e) => onFocus(e, character3)} onKeyDown={(e) => onKeyDown(e, character2, character1)} className='rounded border w-[25px] p-[2px] ml-[2px]' type='text' />
                <input ref={character3} onInput={(e) => onFocus(e, character4)} onKeyDown={(e) => onKeyDown(e, character3, character2)} className='rounded border w-[25px] p-[2px] ml-[2px]' type='text' />
                <input ref={character4} onInput={(e) => onFocus(e, character4)} onKeyDown={(e) => onKeyDown(e, character4, character3)} className='rounded border w-[25px] p-[2px] ml-[2px]' type='text' />
              </div>
            </div>
          </div>
          <div className='h-[20%] w-full flex justify-evenly text-center items-center'>
            <div>
              <p className='font-bold text-xl'>
                80K
              </p>
              <p className='text-gray-500'>
                Followers
              </p>
            </div>
            <div>
              <p className='font-bold text-xl'>
                803K
              </p>
              <p className='text-gray-500'>
                Likes
              </p>
            </div>
            <div>
              <p className='font-bold text-xl'>
                1.4K
              </p>
              <p className='text-gray-500'>
                Photos
              </p>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className='flex justify-center'>
        <button className='p-[5px] border bg-red-400' onClick={() => {
          setBgColor('red')
        }}>Red</button>
        <button className='p-[5px] border ml-[2px] bg-blue-300' onClick={() => {
          setBgColor('blue')
        }}>Blue</button>
        <button className='p-[5px] border ml-[2px] bg-white' onClick={() => {
          setBgColor('white')
        }}>Default</button>
      </div>
    </div>
  )
}

export default App
