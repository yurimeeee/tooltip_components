# tooltip_components

React 기반 애플리케이션 개발 시, 다양하게 사용자 정의하여 사용 가능한 툴팁 컴포넌트입니다.
이를 사용하여 요소에 쉽게 툴팁을 추가하여 사용자에게 추가 정보나 컨텍스트를 제공할 수 있습니다.


## Getting Started

repository를 클론 후 의존성을 설치해주세요 😊

```bash
git clone https://github.com/yurimeeee/tooltip_components.git

npm install

npm start
```

## Use 
```bash
import Tooltip from '@components/Tooltip';

const App = () => {
  return (
    <Tooltip content="안녕하세요, 저는 툴팁입니다" direction="top">
      <button>마우스를 올려보세요</button>
    </Tooltip>
  );
};
```

## Description

### Props
Tooltip 컴포넌트는 여러 속성을 받아서 툴팁의 내용/스타일을 커스터마이징하기 위해 **`styled components`** 로 구현하였습니다.
각각의 속성은 다음과 같은 역할을 합니다.

- **`content`**: 툴팁에 표시할 내용을 설정. (ReactNode로 전달)
- **`children`**: 툴팁을 표시할 요소.
- **`direction`**: 툴팁이 표시될 방향을 설정.
- **`delay`**: 툴팁이 나타나기까지의 지연 시간을 설정.
- **`hideDelay`**: 마우스를 요소에서 떼고 나서 툴팁이 사라지는 지연 시간을 설정.
- **`customStyle`**: 툴팁의 커스텀 스타일을 설정.
- **`width`**, **`height`**, **`fontSize`**, **`fontWeight`**, **`lineHeight`**, **`fontColor`**, **`bgColor`**, **`padding`**, **`margin`**, **`border`**, **`borderRadius`**: 툴팁의 스타일을 세부적으로 설정.
- **`icon`**: 툴팁 내에 표시할 아이콘 이미지 URL을 설정.
- **`button`**: 툴팁 내에 표시할 버튼의 텍스트.
- **`btnBgColor`**, **`btnFontColor`**: 버튼의 배경색과 글자색을 설정.
- **`disabled`**: 툴팁의 비활성화 여부를 설정.
- **`hoverActive`**: 마우스를 툴팁 위에 올려놓은 상태에서 툴팁이 사라지지 않도록 할지 여부를 설정.

컴포넌트는 다음과 같은 동작을 합니다.

1. **`isVisible`** 툴팁의 가시성 상태.
2. **`isHovered`** 툴팁 내의 마우스 호버 상태.
3. **`positionStyles`** 툴팁의 위치를 동적으로 계산하고 업데이트하는 상태.
4. **`showTimeoutRef`** 와 **`hideTimeoutRef`** 를 사용하여 툴팁의 나타나고 사라지는 타이밍을 제어.
5. **`handleMouseEnter`**, **`handleMouseLeave`**, **`handleTooltipMouseEnter`**, **`handleTooltipMouseLeave`** 함수를 사용하여 마우스 이벤트를 처리.
6. **`getPositionStyles`** 함수를 사용하여 툴팁의 위치를 계산.


