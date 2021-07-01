import styled from '@emotion/styled';

export const Card = styled.div`
  max-width: 350px;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #cecece;
  overflow: hidden;
  P {
    margin-top: 0;
  }
`;

export const Description = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  margin: 0 auto 20px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const Tag = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 16px;
  color: #b6b6b6;
`;

export const Location = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0;
  color: #969696;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 16px;
  border-top: 1px solid #cecece;
  background-color: #d9e4eb;

  &:not(:last-child) {
    border-right: 1px solid #cecece;
  }
`;

export const StatsLabel = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const StatsQuantity = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #9b9b9b;
`;
