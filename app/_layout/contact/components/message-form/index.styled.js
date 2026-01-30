'use client';

import { styled } from 'styled-components';

export const FormContainer = styled.div`
  padding-inline: calc(clamp(2.5em, 8vw, 8em) * 2);
  margin-inline: auto;
  padding-block: clamp(6em, 15vh, 12em);

  @media screen and (min-width: ${(props) => props.theme?.breakpoints?.container || '1920px'}) {
    max-width: ${(props) => props.theme?.breakpoints?.container || '1920px'};
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    currentColor 20%,
    currentColor 80%,
    transparent
  );
  margin-block-end: clamp(3em, 8vh, 5em);
  opacity: 0.3;
`;

export const FormTitle = styled.h3`
  font-size: clamp(1.5em, 3vw, 2.5em);
  line-height: 1.2;
  margin-block-end: clamp(1.5em, 3vh, 2.5em);
  font-weight: 300;
  letter-spacing: -0.01em;
`;

export const FormWrapper = styled.div`
  max-width: 800px;
`;

export const FormSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(1.2em, 3vw, 2.5em);
  margin-block-end: clamp(3em, 8vh, 5em);

  & > :nth-child(3) {
    grid-column: 1 / -1;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.5em, 1.5vh, 0.85em);
  position: relative;
`;

export const Label = styled.label`
  font-size: clamp(0.85em, 1.2vw, 1em);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: currentColor;
  opacity: 0.8;
  transition: opacity 0.3s ease;
`;

export const InputWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: clamp(1.25em, 2.5vh, 1.75em);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  font-size: clamp(0.95em, 1.5vw, 1.1em);
  color: currentColor;
  font-family: inherit;
  font-weight: 300;
  letter-spacing: 0.01em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);

  &::placeholder {
    color: currentColor;
    opacity: 0.4;
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.08);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::-webkit-autofill,
  &:-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.03);
    -webkit-text-fill-color: currentColor;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: clamp(1.25em, 2.5vh, 1.75em);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  font-size: clamp(0.95em, 1.5vw, 1.1em);
  color: currentColor;
  font-family: inherit;
  font-weight: 300;
  letter-spacing: 0.01em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  resize: vertical;
  min-height: 200px;
  backdrop-filter: blur(10px);

  &::placeholder {
    color: currentColor;
    opacity: 0.4;
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.08);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Custom scrollbar for textarea */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

export const SubmitGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.5em, 3vh, 2em);
  padding-block-start: clamp(2em, 5vh, 3em);
`;

export const StatusMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: clamp(1em, 2vh, 1.5em);
  border-radius: 2px;
  background: ${(props) =>
    props.success
      ? 'rgba(34, 197, 94, 0.1)'
      : props.error
        ? 'rgba(239, 68, 68, 0.1)'
        : 'transparent'};
  border: 1px solid ${(props) =>
    props.success
      ? 'rgba(34, 197, 94, 0.3)'
      : props.error
        ? 'rgba(239, 68, 68, 0.3)'
        : 'transparent'};
  color: ${(props) =>
    props.success ? '#22c55e' : props.error ? '#ef4444' : 'currentColor'};
  font-size: clamp(0.9em, 1.2vw, 1em);
  letter-spacing: 0.01em;
  font-weight: 400;
  animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
  }

  span {
    flex: 1;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
