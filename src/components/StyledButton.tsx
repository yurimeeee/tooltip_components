import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import theme from '@styles/theme';

type StyledButtonProps = {
  loading?: boolean;
  width?: number | string;
  height?: number | string;
  fontSize?: number;
  fontWeight?: number;
  fontColor?: string;
  lineHeight?: number;
  padding?: string;
  margin?: string;
  border?: string;
  borderRadius?: number;
  bgColor?: string;
  hoverColor?: string;
  title?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

type Button = {
  $width?: number | string;
  $height?: number | string;
  $fontSize?: number;
  $fontWeight?: number;
  $fontColor?: string;
  $padding?: string;
  $lineHeight?: number;
  $border?: string;
  $borderRadius?: number;
  $margin?: string;
  $bgColor?: string;
  $hoverColor?: string;
  $active?: boolean;
};

const StyledButton = ({
  loading,
  width,
  height = 22,
  fontSize = 14,
  lineHeight,
  fontWeight = 400,
  fontColor = theme.colors.whiteColor,
  padding = '0 16px',
  margin = '0',
  border = 'none',
  borderRadius,
  bgColor = theme.colors.activeColor,
  hoverColor = theme.colors.activeColor,
  active = true,
  title = '',
  disabled = false,
  onClick = () => null,
}: StyledButtonProps) => {
  return (
    <Button
      $width={width}
      $height={height}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $lineHeight={lineHeight}
      $fontColor={fontColor}
      $padding={padding}
      $margin={margin}
      $border={border}
      $borderRadius={borderRadius}
      $bgColor={bgColor}
      $hoverColor={hoverColor}
      $active={active}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </Button>
  );
};

export default React.memo(StyledButton);

const Button = styled.button<Button>`
  position: relative;
  height: ${({ $height }) => $height}px;
  font-size: ${({ $fontSize }) => $fontSize}px;
  line-height: ${({ $lineHeight }) => $lineHeight}px;
  font-weight: ${({ $fontWeight }) => $fontWeight};
  padding: ${({ $padding }) => $padding};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: ${({ $border }) => $border};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  margin: ${({ $margin }) => $margin};
  background-color: ${({ $bgColor }) => ($bgColor ? $bgColor : theme.colors.activeColor)};
  color: ${({ $fontColor }) => ($fontColor ? $fontColor : theme.colors.whiteColor)};
  width: ${({ $width }) => ($width ? `${$width}px` : '70px')};
  cursor: pointer;
  transition: 0.5s;

  ${({ $active, $bgColor, $fontColor, $hoverColor }) =>
    $active &&
    css`
      &::before {
        position: absolute;
        content: '';
        display: block;
        top: 0;
        left: 0;
        background: ${$bgColor ? $bgColor : theme.colors.activeColor};
        width: 0;
        height: 2px;
        transition: all 0.5s;
      }

      &::after {
        position: absolute;
        content: '';
        display: block;
        bottom: 0;
        right: 0;
        background: ${$bgColor ? $bgColor : theme.colors.activeColor};
        width: 0;
        height: 2px;
        transition: all 0.5s;
      }

      &:hover {
        background: ${theme.colors.whiteColor};
        color: ${$fontColor ? ($hoverColor ? $hoverColor : $fontColor) : theme.colors.activeColor};

        &::after {
          width: 100%;
        }

        &::before {
          width: 100%;
        }
      }
    `}/* ${({ $active }) =>
    $active &&
    css`
      color: ${theme.colors.whiteColor};
      background-color: ${theme.colors.blackColor};
    `}; */

  /* &::before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left: 0;
    background: ${({ $bgColor }) => ($bgColor ? $bgColor : theme.colors.activeColor)};
    width: 0;
    height: 2px;
    transition: all.5s;
  }

  &::after {
    position: absolute;
    content: '';
    display: block;
    bottom: 0;
    right: 0;
    background: ${({ $bgColor }) => ($bgColor ? $bgColor : theme.colors.activeColor)};
    width: 0;
    height: 2px;
    transition: all.5s;
  }

  &:hover {
    background: ${theme.colors.whiteColor};
    color: ${({ $fontColor, $hoverColor }) => ($fontColor ? ($hoverColor ? $hoverColor : $fontColor) : theme.colors.activeColor)};

    &::after {
      width: 100%;
    }

    &::before {
      width: 100%;
    }
  } */
`;
