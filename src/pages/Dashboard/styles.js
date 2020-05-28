import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 8px;
`;

export const Result = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Cover = styled.div`
  flex: 1 1 300px;
  margin: 0 10px 16px 0;
  position: relative;
`;

export const Image = styled.img`
  margin: 8px 0;
  padding: 8px;
  border: 1px solid #5d5d5d;
`;

export const Info = styled.div`
  flex: 10 1 320px;
  margin: 0 0 16px;
  padding: 0 8px;
`;

export const BoxContent = styled.div`
  flex: 1 1 33%;
  min-width: 200px;
  text-align: center;
`;

export const InfoTitle = styled.h1`
  margin: 0;
  color: #962eaa;
  font-size: 54px;
  font-weight: 700;
  line-height: 1;
`;

export const Favorite = styled.span`
  position: absolute;
  top: 16px;
  left: 4px;
`;
