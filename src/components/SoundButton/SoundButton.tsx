import React from 'react'
import styled from 'styled-components'

interface SoundButtonProps {
  audioSrc: string
  colour?: string
  height?: number
  keyCode: number
  label: string
  onClick: (e: React.MouseEvent) => void
  onEnded: (e: React.SyntheticEvent<HTMLAudioElement>) => void
  soundName: string
  volume?: number
}

const StyledSoundButton = styled.div<{ $colour?: string; $height?: number }>`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.$colour ?? '#eeeeee'};
  min-height: ${(props) => Number(props.$height) * 80 ?? '80'}px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  &.playing {
    /* border: 4px solid #03a729; */
    box-shadow: inset 0 0 0 4px #03a729;
  }
`

const StyledSoundButtonLabel = styled.span`
  display: block;
  margin-bottom: 5px;
`

const SoundButton: React.FC<SoundButtonProps> = ({
  audioSrc,
  colour,
  height = 1,
  keyCode,
  label,
  onClick,
  onEnded,
  soundName,
  volume = 1,
}) => {
  const audioRef = React.useRef<HTMLAudioElement>(null)

  return (
    <StyledSoundButton data-key={keyCode} onClick={onClick} $colour={colour} $height={height}>
      <StyledSoundButtonLabel>{soundName}</StyledSoundButtonLabel>
      <kbd>{label}</kbd>
      <audio ref={audioRef} data-key={keyCode} src={audioSrc} onEnded={onEnded} data-volume={volume}></audio>
    </StyledSoundButton>
  )
}

export default SoundButton