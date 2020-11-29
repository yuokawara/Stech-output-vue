export const state = () => ({
  text: '',
  count: 0
})

export const mutaions = {
  increment(state) {
    state.count += 1
  },
  changeText(state, text) {
    state.text = text
  }
}
