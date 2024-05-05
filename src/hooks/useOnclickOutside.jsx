import React, { useEffect } from 'react'

const useOnclickOutside = (ref, handler) => {
  useEffect(()=>{
    const listener = (event) =>{
        // 클릭 시 모달창 안이면 그냥 return
        if(!ref.current || ref.current.contains(event.target)){
        return;
        }
        handler()
    }
    document.addEventListener('mousedown', listener)
    return () =>{
        document.removeEventListener('mousedown', listener)
    }
  },[ref,handler])
}

export default useOnclickOutside