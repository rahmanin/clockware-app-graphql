import {postElement} from "../postElement"

it("the data have to be a string", () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(new Response('{"any":"smth"}')))
  return postElement({img: "file"}, "send_image")
    .then(response => {
      expect(typeof response).toBe("object")
    })
})