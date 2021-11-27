import create from 'zustand'

const useStore = create((set) => ({
  num: 0,
  increaseNum: () => set((state) => ({ num: state.num + 1 }))
}))

export default useStore