import wave, struct, math

sample_rate = 44100
bpm = 124
beat_sec = 60.0 / bpm
bar_sec = beat_sec * 4
total_bars = 4
total_sec = bar_sec * total_bars
total_samples = int(sample_rate * total_sec)

# Scale: C Pentatonic Major (C4, D4, E4, G4, A4, C5, D5, E5)
notes = {
    'C2': 65.41, 'G2': 98.00, 'A2': 110.00, 'F2': 87.31,
    'C3': 130.81, 'E3': 164.81, 'G3': 196.00, 'A3': 220.00,
    'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'G4': 392.00,
    'A4': 440.00, 'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'G5': 783.99
}

bass_line = [
    ('C2', 0.5), ('C2', 0.5), ('G2', 0.5), ('C3', 0.5), ('A2', 0.5), ('C3', 0.5), ('G2', 0.5), ('C2', 0.5),
    ('F2', 0.5), ('F2', 0.5), ('C3', 0.5), ('F2', 0.5), ('G2', 0.5), ('G2', 0.5), ('D3', 0.5), ('G2', 0.5),
    ('A2', 0.5), ('C3', 0.5), ('E3', 0.5), ('A2', 0.5), ('F2', 0.5), ('A2', 0.5), ('C3', 0.5), ('F2', 0.5),
    ('G2', 0.5), ('G2', 0.5), ('B2', 0.5), ('D3', 0.5), ('G2', 0.5), ('A2', 0.5), ('B2', 0.5), ('G2', 0.5),
]

arp_notes = ['C4', 'E4', 'G4', 'C5', 'G4', 'E4', 'A4', 'E5', 'F4', 'A4', 'C5', 'F5', 'G4', 'B4', 'D5', 'G5']

audio = [0.0] * total_samples

for i in range(total_samples):
    t = i / sample_rate
    beat_idx = int(t / (beat_sec * 0.5)) % len(bass_line)
    bass_pitch, _ = bass_line[beat_idx]
    freq_b = notes.get(bass_pitch, 65.41)
    t_in_beat = t % (beat_sec * 0.5)
    env_b = math.exp(-t_in_beat * 7)
    bass = math.sin(2 * math.pi * freq_b * t) + 0.3 * math.sin(4 * math.pi * freq_b * t)
    
    # Arpeggio / Chime
    step_16th = int(t / (beat_sec * 0.25)) % len(arp_notes)
    arp_pitch = arp_notes[step_16th]
    freq_a = notes.get(arp_pitch, 440.0)
    t_arp = t % (beat_sec * 0.25)
    env_a = math.exp(-t_arp * 12)
    # Triangle wave for cozy chiptune sound
    tri = 2 * abs(2 * ((t * freq_a) % 1) - 1) - 1
    
    # Drums (Kick on 1 & 3, Snare/Clap on 2 & 4, Hi-hat on 8ths)
    cur_beat = int(t / beat_sec) % 4
    t_in_full_beat = t % beat_sec
    drum = 0.0
    # Kick
    if cur_beat in (0, 2):
        kf = max(40, 150 * math.exp(-t_in_full_beat * 35))
        drum += math.sin(2 * math.pi * kf * t_in_full_beat) * math.exp(-t_in_full_beat * 18) * 0.6
    # Snare
    if cur_beat in (1, 3):
        noise = (((i * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff) * 2 - 1
        drum += noise * math.exp(-t_in_full_beat * 24) * 0.25
    # Hi-hat
    t_8th = t % (beat_sec * 0.5)
    noise_hh = (((i * 214013 + 2531011) & 0x7fffffff) / 0x7fffffff) * 2 - 1
    drum += noise_hh * math.exp(-t_8th * 45) * 0.08
    
    sample = bass * env_b * 0.3 + tri * env_a * 0.18 + drum * 0.4
    audio[i] = max(-0.95, min(0.95, sample))

with wave.open('prototype/music_previews/06_MegavacGroove_SynthLoop.wav', 'w') as f:
    f.setnchannels(1)
    f.setsampwidth(2)
    f.setframerate(sample_rate)
    frames = bytearray()
    for s in audio:
        val = int(s * 32767.0)
        frames.extend(struct.pack('<h', val))
    f.writeframes(frames)
print("Synth loop generated successfully!")
