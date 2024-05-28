import styled from 'styled-components';
import theme from '@styles/theme';

import Tooltip from '@components/Tooltip';
import StyledButton from '@components/StyledButton';

import InfoIcon from '@assets/icons/info.svg';

function App() {
  return (
    <div>
      <FlexBox $gap="200px" $margin="100px 0 0 ">
        <Wrapper>
          <FlexBox>
            <Tooltip content={'prompt text'} direction="topLeft">
              <StyledButton title="TL" />
            </Tooltip>
            <Tooltip content={'prompt text'}>
              <StyledButton title="TOP" />
            </Tooltip>
            <Tooltip content={'prompt text'} direction="topRight">
              <StyledButton title="TR" />
            </Tooltip>
          </FlexBox>
          <FlexBox $justifyContent="space-between">
            <FlexBox $column $alignItems="start">
              <Tooltip content={'prompt text'} direction="leftTop">
                <StyledButton title="LT" />
              </Tooltip>
              <Tooltip content={'prompt text'} direction="left">
                <StyledButton title="LEFT" />
              </Tooltip>
              <Tooltip content={'prompt text'} direction="leftBottom">
                <StyledButton title="LB" />
              </Tooltip>
            </FlexBox>

            <FlexBox $column $alignItems="end">
              <Tooltip content={'prompt text'} direction="rightTop">
                <StyledButton title="RT" />
              </Tooltip>
              <Tooltip content={'prompt text'} direction="right">
                <StyledButton title="RIGHT" />
              </Tooltip>
              <Tooltip content={'prompt text'} direction="rightBottom">
                <StyledButton title="RB" />
              </Tooltip>
            </FlexBox>
          </FlexBox>

          <FlexBox>
            <Tooltip content={'prompt text'} direction="bottomLeft">
              <StyledButton title="BL" />
            </Tooltip>
            <Tooltip content={'prompt text'} direction="bottom">
              <StyledButton title="BOTTOM" />
            </Tooltip>
            <Tooltip content={'prompt text'} direction="bottomRight">
              <StyledButton title="BR" />
            </Tooltip>
          </FlexBox>
        </Wrapper>
        <ScrollBox>
          <FlexBox>
            <Wrapper>
              <FlexBox>
                <Tooltip content={'prompt text'} direction="topLeft">
                  <StyledButton title="TL" />
                </Tooltip>
                <Tooltip content={'prompt text'}>
                  <StyledButton title="TOP" />
                </Tooltip>
                <Tooltip content={'prompt text'} direction="topRight">
                  <StyledButton title="TR" />
                </Tooltip>
              </FlexBox>

              <FlexBox $justifyContent="space-between">
                <FlexBox $column $alignItems="start">
                  <Tooltip content={'prompt text'} direction="leftTop">
                    <StyledButton title="LT" />
                  </Tooltip>
                  <Tooltip content={'prompt text'} direction="left">
                    <StyledButton title="LEFT" />
                  </Tooltip>
                  <Tooltip content={'prompt text'} direction="leftBottom">
                    <StyledButton title="LB" />
                  </Tooltip>
                </FlexBox>

                <FlexBox $column $alignItems="end">
                  <Tooltip content={'prompt text'} direction="rightTop">
                    <StyledButton title="RT" />
                  </Tooltip>
                  <Tooltip content={'prompt text'} direction="right">
                    <StyledButton title="RIGHT" />
                  </Tooltip>
                  <Tooltip content={'prompt text'} direction="rightBottom">
                    <StyledButton title="RB" />
                  </Tooltip>
                </FlexBox>
              </FlexBox>

              <FlexBox>
                <Tooltip content={'prompt text'} direction="bottomLeft">
                  <StyledButton title="BL" />
                </Tooltip>
                <Tooltip content={'prompt text'} direction="bottom">
                  <StyledButton title="BOTTOM" />
                </Tooltip>
                <Tooltip content={'prompt text'} direction="bottomRight">
                  <StyledButton title="BR" />
                </Tooltip>
              </FlexBox>
            </Wrapper>
          </FlexBox>
        </ScrollBox>
      </FlexBox>

      <FlexBox $margin="50px 0">
        <Tooltip content={'prompt text'} direction="topLeft" delay={1000}>
          <StyledButton title="enter-delay 1s" width={150} />
        </Tooltip>
        <Tooltip content={'prompt text'} hideDelay={1000}>
          <StyledButton title="leave-delay 1s" width={150} />
        </Tooltip>
        <Tooltip content={'prompt text'} direction="topRight" hoverActive hideDelay={1000}>
          <StyledButton title="hover not hidden" width={150} />
        </Tooltip>
      </FlexBox>

      <FlexBox $margin="50px 0">
        <Wrapper>
          <FlexBox>
            <Tooltip
              content={'Are you sure to delete this task?'}
              fontColor={theme.colors.grayColor}
              bgColor={theme.colors.whiteColor}
              icon={InfoIcon}
              fontSize={16}
              padding="16px"
              width={258}
              button="yes"
            >
              <StyledButton title="TOP" />
            </Tooltip>
          </FlexBox>
          <FlexBox $justifyContent="space-between">
            <FlexBox $column $alignItems="start">
              <Tooltip
                content={'Are you sure to delete this task?'}
                direction="left"
                fontColor={theme.colors.grayColor}
                bgColor={theme.colors.whiteColor}
                icon={InfoIcon}
                fontSize={16}
                padding="16px"
                width={258}
                button="yes"
              >
                <StyledButton title="LEFT" />
              </Tooltip>
            </FlexBox>

            <FlexBox $column $alignItems="end">
              <Tooltip
                content={'Are you sure to delete this task?'}
                direction="right"
                fontColor={theme.colors.grayColor}
                bgColor={theme.colors.whiteColor}
                icon={InfoIcon}
                fontSize={16}
                padding="16px"
                width={258}
                button="yes"
              >
                <StyledButton title="RIGHT" />
              </Tooltip>
            </FlexBox>
          </FlexBox>

          <FlexBox>
            <Tooltip
              content={'Are you sure to delete this task?'}
              direction="bottom"
              fontColor={theme.colors.grayColor}
              bgColor={theme.colors.whiteColor}
              icon={InfoIcon}
              fontSize={16}
              padding="16px"
              width={258}
              button="yes"
            >
              <StyledButton title="BOTTOM" />
            </Tooltip>
          </FlexBox>
        </Wrapper>
      </FlexBox>

      <FlexBox>
        <Tooltip content={'prompt text'} direction="top" bgColor="#FFEFA0" fontColor={theme.colors.blackColor}>
          <StyledButton bgColor="#FFEFA0" fontColor={theme.colors.blackColor} hoverColor={theme.colors.blackColor} title="YELLOW" />
        </Tooltip>
        <Tooltip content={'prompt text'} direction="top" bgColor="#FFA0C5">
          <StyledButton bgColor="#FFA0C5" fontColor="white" hoverColor="#FFA0C5" title="PINK" />
        </Tooltip>
      </FlexBox>

      <FlexBox $margin="50px 0">
        <Tooltip disabled>
          <StyledButton bgColor={theme.colors.blackColor} fontColor="white" hoverColor={theme.colors.blackColor} title="Disable" />
        </Tooltip>

        <Tooltip content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores atque'} direction="top" width={200}>
          <HoverItem>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores atque</HoverItem>
        </Tooltip>
      </FlexBox>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
`;
const ScrollBox = styled.div`
  width: 100%;
  max-width: 390px;
  max-height: 120px;
  overflow: scroll;
`;
const FlexBox = styled.div<{ $column?: boolean; $justifyContent?: string; $alignItems?: string; $margin?: string; $gap?: string }>`
  display: flex;
  width: 100%;
  flex-direction: ${({ $column }) => ($column ? 'column' : 'row')};
  justify-content: ${({ $justifyContent }) => ($justifyContent ? $justifyContent : 'center')};
  align-items: ${({ $alignItems }) => ($alignItems ? $alignItems : 'center')};
  gap: ${({ $gap }) => ($gap ? $gap : '10px')};
  margin: ${({ $margin }) => ($margin ? $margin : '0')};
`;
const HoverItem = styled.div`
  background: ${theme.colors.lightgrayColor};
  padding: 4px 6px;
  max-height: 22px;
  font-size: 14px;
`;
