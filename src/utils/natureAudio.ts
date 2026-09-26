// Procedural Nature Soundscape Generator (Web Audio API)
// Synthesizes soothing wind, leaves rustle, river flow, and soft morning birdsong

class NatureSoundscape {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private birdInterval: any = null;

  public init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    this.ctx = new AudioCtx();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  public play() {
    if (this.isPlaying) return;
    this.init();
    if (!this.ctx || !this.masterGain) return;

    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    // 1. Wind & Meadow Breeze (Filtered Pink Noise with LFO)
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
      b6 = white * 0.115926;
    }

    const windSource = this.ctx.createBufferSource();
    windSource.buffer = noiseBuffer;
    windSource.loop = true;

    // Filter to sound like soft rustling canopy wind
    const windFilter = this.ctx.createBiquadFilter();
    windFilter.type = "lowpass";
    windFilter.frequency.setValueAtTime(420, this.ctx.currentTime);

    // Subtle gentle modulation
    const lfo = this.ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.25, this.ctx.currentTime);
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(140, this.ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(windFilter.frequency);

    const windGain = this.ctx.createGain();
    windGain.gain.setValueAtTime(0.4, this.ctx.currentTime);

    windSource.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(this.masterGain);

    windSource.start();
    lfo.start();

    // 2. Procedural Bird Chirps in distance
    this.scheduleBirdChirp();
    this.birdInterval = setInterval(() => {
      if (this.isPlaying && Math.random() > 0.3) {
        this.scheduleBirdChirp();
      }
    }, 4500);

    this.isPlaying = true;
  }

  private scheduleBirdChirp() {
    if (!this.ctx || !this.masterGain || this.ctx.state !== "running") return;
    const now = this.ctx.currentTime + 0.1 + Math.random() * 0.8;
    const osc = this.ctx.createOscillator();
    const chirpGain = this.ctx.createGain();

    osc.type = "sine";
    const baseFreq = 2600 + Math.random() * 800;
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq + 600, now + 0.08);
    osc.frequency.exponentialRampToValueAtTime(baseFreq - 200, now + 0.16);

    chirpGain.gain.setValueAtTime(0.0001, now);
    chirpGain.gain.exponentialRampToValueAtTime(0.06, now + 0.04);
    chirpGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

    osc.connect(chirpGain);
    chirpGain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  public stop() {
    if (!this.isPlaying) return;
    if (this.birdInterval) {
      clearInterval(this.birdInterval);
      this.birdInterval = null;
    }
    if (this.ctx) {
      this.ctx.close();
      this.ctx = null;
      this.masterGain = null;
    }
    this.isPlaying = false;
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const natureAudio = typeof window !== "undefined" ? new NatureSoundscape() : null;
