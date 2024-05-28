import React, { useState, useRef, useEffect, ReactNode } from 'react';
import styled, { CSSProperties } from 'styled-components';
import theme from '@styles/theme';
import StyledButton from './StyledButton';

type TooltipProps = {
  content?: ReactNode;
  children: ReactNode;
  customStyle?: CSSProperties;
  direction?: 'top' | 'right' | 'bottom' | 'left' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
  delay?: number; // tooltip show delay
  hideDelay?: number; // tooltip hide delay
  hoverActive?: boolean; // hover not hidden
  width?: number | string;
  height?: number | string;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  fontColor?: string;
  bgColor?: string;
  padding?: string;
  margin?: string;
  border?: string;
  borderRadius?: number;
  icon?: string;
  button?: string;
  btnBgColor?: string;
  btnFontColor?: string;
  disabled?: boolean;
};

type TooltipStyleProps = {
  $width?: number | string;
  $height?: number | string;
  $fontSize?: number;
  $fontWeight?: number;
  $lineHeight?: number;
  $fontColor?: string;
  $bgColor?: string;
  $padding?: string;
  $border?: string;
  $borderRadius?: number;
  $margin?: string;
  $disabled?: boolean;
};

const Tooltip = ({
  content,
  direction = 'top',
  delay = 0,
  hideDelay = 0,
  customStyle = {},
  children,
  width,
  height,
  fontSize = 12,
  fontWeight = 400,
  lineHeight,
  fontColor = theme.colors.whiteColor,
  bgColor = theme.colors.disabledColor,
  padding = '6px 0',
  margin = '0',
  border = 'none',
  borderRadius = 4,
  icon,
  button,
  btnBgColor = theme.colors.activeColor,
  btnFontColor,
  disabled = false,
  hoverActive = false,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [positionStyles, setPositionStyles] = useState({}); // 툴팁 위치 스타일
  const showTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 컴포넌트 언마운트시 실행중 타임아웃 있다면 제거
    return () => {
      if (showTimeoutRef.current) {
        clearTimeout(showTimeoutRef.current);
      }
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (!disabled) {
      // hide 타임아웃이 있다면 제거
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      // delay 후에 툴팁 노출
      showTimeoutRef.current = setTimeout(() => {
        setPositionStyles(getPositionStyles());
        setIsVisible(true);
      }, delay);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      // show 타임아웃이 있다면 제거
      if (showTimeoutRef.current) {
        clearTimeout(showTimeoutRef.current);
      }
      // hoverActive 있는 경우, delay 후 툴팁 제거
      hideTimeoutRef.current = setTimeout(
        () => {
          setIsVisible(false);
        },
        hoverActive ? 0 : hideDelay
      );
    }
  };

  const handleTooltipMouseEnter = () => {
    // hoverActive인 경우 마우스가 툴팁에 있다고 설정
    if (hoverActive) {
      setIsHovered(true);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    }
  };

  const handleTooltipMouseLeave = () => {
    // hoverActive인 경우 마우스가 툴팁에 없다고 설정
    if (hoverActive) {
      setIsHovered(false);
      // 툴팁이 즉시 제거되지 않도록 hide 설정
      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, hideDelay);
    }
  };

  const getPositionStyles = () => {
    if (!tooltipRef.current) return {};

    const containerRect = tooltipRef.current.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    const top = containerRect.top + scrollY;
    const left = containerRect.left + scrollX;
    const width = containerRect.width;
    const height = containerRect.height;

    // 각 방향에 따른 툴팁 위치 계산
    switch (direction) {
      case 'top':
        return { top: top - 10, left: left + width / 2, transform: 'translateX(-50%) translateY(-100%)' };
      case 'topLeft':
        return { top: top - 10, left: left, transform: 'translateY(-100%)' };
      case 'topRight':
        return { top: top - 10, left: left + width, transform: 'translateX(-100%) translateY(-100%)' };
      case 'right':
        return { top: top + height / 2, left: left + width + 10, transform: 'translateY(-50%)' };
      case 'bottom':
        return { top: top + height + 10, left: left + width / 2, transform: 'translateX(-50%)' };
      case 'bottomLeft':
        return { top: top + height + 10, left: left };
      case 'bottomRight':
        return { top: top + height + 10, left: left + width, transform: 'translateX(-100%)' };
      case 'left':
        return { top: top + height / 2, left: left - 10, transform: 'translateX(-100%) translateY(-50%)' };
      case 'leftTop':
        return { top: top, left: left - 10, transform: 'translateX(-100%)' };
      case 'leftBottom':
        return { top: top + height, left: left - 10, transform: 'translateX(-100%) translateY(-100%)' };
      case 'rightTop':
        return { top: top, left: left + width + 10 };
      case 'rightBottom':
        return { top: top + height, left: left + width + 10, transform: 'translateY(-100%)' };
      default:
        return {};
    }
  };

  return (
    <Wrapper ref={tooltipRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={customStyle}>
      {children}
      {isVisible && (
        <TooltipContent
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
          $disabled={disabled}
          onMouseEnter={handleTooltipMouseEnter}
          onMouseLeave={handleTooltipMouseLeave}
          style={{ ...positionStyles, position: 'fixed', ...customStyle }}
          data-direction={direction}
        >
          <Contents>
            {icon && <Icon src={icon} alt="icon" />}
            {content}
          </Contents>
          {button && (
            <ButtonWrap>
              <StyledButton title={button} width={40} height={20} fontSize={12} bgColor={btnBgColor} fontColor={btnFontColor} borderRadius={4} active={false} />
            </ButtonWrap>
          )}

          <TooltipArrow $bgColor={bgColor} data-direction={direction} />
        </TooltipContent>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipContent = styled.div<TooltipStyleProps>`
  position: absolute;
  z-index: 9999;
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $fontColor }) => $fontColor};
  padding: ${({ $padding }) => $padding};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  width: ${({ $width }) => ($width ? `${$width}px` : '70px')};
  height: ${({ $height }) => ($height ? `${$height}px` : 'auto')};
  font-size: ${({ $fontSize }) => $fontSize}px;
  font-weight: ${({ $fontWeight }) => $fontWeight};
  line-height: ${({ $lineHeight }) => $lineHeight}px;
  margin: ${({ $margin }) => $margin};
  border: ${({ $border }) => $border};
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.12);
`;

const TooltipArrow = styled.div<TooltipStyleProps>`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px;
  border-color: transparent;

  &[data-direction='top'] {
    border-top-color: ${({ $bgColor }) => $bgColor};
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
  &[data-direction='topLeft'] {
    border-top-color: ${({ $bgColor }) => $bgColor};
    bottom: -10px;
    left: 10px;
  }
  &[data-direction='topRight'] {
    border-top-color: ${({ $bgColor }) => $bgColor};
    bottom: -10px;
    right: 10px;
  }
  &[data-direction='right'] {
    border-right-color: ${({ $bgColor }) => $bgColor};
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
  &[data-direction='bottom'] {
    border-bottom-color: ${({ $bgColor }) => $bgColor};
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
  &[data-direction='bottomLeft'] {
    border-bottom-color: ${({ $bgColor }) => $bgColor};
    top: -10px;
    left: 10px;
  }
  &[data-direction='bottomRight'] {
    border-bottom-color: ${({ $bgColor }) => $bgColor};
    top: -10px;
    right: 10px;
  }
  &[data-direction='left'] {
    border-left-color: ${({ $bgColor }) => $bgColor};
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
  &[data-direction='leftTop'] {
    border-left-color: ${({ $bgColor }) => $bgColor};
    right: -10px;
    top: 6px;
  }
  &[data-direction='leftBottom'] {
    border-left-color: ${({ $bgColor }) => $bgColor};
    right: -10px;
    bottom: 6px;
  }
  &[data-direction='rightTop'] {
    border-right-color: ${({ $bgColor }) => $bgColor};
    left: -10px;
    top: 6px;
  }
  &[data-direction='rightBottom'] {
    border-right-color: ${({ $bgColor }) => $bgColor};
    left: -10px;
    bottom: 6px;
  }
`;

const Contents = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  text-align: center;
  padding: 0 4px;
`;
const ButtonWrap = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: end;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export default Tooltip;
