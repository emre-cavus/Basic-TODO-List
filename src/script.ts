import { NULL } from "node-sass"

const list = document.querySelector<HTMLUListElement>('#list')
const form = document.getElementById('#new-task-form') as HTMLFormElement | null
const input = document.querySelector<HTMLUListElement>('#new-task-title')

form?.addEventListener("submit", e => {
  e.preventDefault()
  if (input?.value == "" || input?.value == null) return
  cosnt task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
  }
  input.value
})
