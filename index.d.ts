interface useCountdownType {
  startCountdown: () => void;
  timeLeft: number;
  onTimerEnds: (callBackFunction: () => void) => void;
}
