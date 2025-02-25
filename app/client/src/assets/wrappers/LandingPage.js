import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;

  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .info span {
    color: #2cb1bc;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -3rem;
  }

  h1 {
    font-weight: 700;
    margin-top: 4rem;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }

  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }

  .register-link {
    margin-right: 1rem;
  }

  .main-img {
    display: none;
  }

  .btn {
    padding: 0.75rem 1rem;
    background: #2cb1bc;
    color: white;
    text-decoration: none;
  }

  @media (min-width: 992px) {
    .page {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .main-img {
      display: block;
    }
  }
`;

export default Wrapper;
