import { useCountdown } from "../useCountdown";

test("Return text in correct format", () => {
  const { startCountdown, timeLeft, onTimerEnds } = useCountdown(60);

  expect(timeLeft).toEqual(60);

  //   expect(words).toEqual(
  //     expect.arrayContaining([
  //       expect.objectContaining({
  //         syntax: expect.any(String),
  //         popularity: expect.any(Number),
  //       }),
  //     ])
  //   );
});
