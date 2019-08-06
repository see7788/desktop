import styled, { css } from 'styled-components';
import { centerIcon } from '~/renderer/mixins';
import { icons, transparency } from '~/renderer/constants';

export const StyledItem = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  margin-top: 12px;
`;

export const ItemHeader = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ItemIcon = styled.div`
  width: 18px;
  height: 18px;
  opacity: ${transparency.icons.inactive};
  margin-left: 16px;
  ${centerIcon('contain')};

  ${({ icon }: { icon: string }) => css`
    background-image: url(${icon});
  `};
`;

export const ItemLabel = styled.div`
  margin-left: 16px;
  font-size: 14px;
`;

export const DropIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${icons.dropDown});
  opacity: ${transparency.icons.inactive};
  margin-left: auto;
  margin-right: 16px;
  ${centerIcon('contain')};
`;
