import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 2rem;

    border-radius: 0.5rem;
  }
  .form-input {
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 0.8rem;
    padding-bottom: 0.4rem;
    text-align: center;
    border: white;

    background: #f8f9fa;
  }
  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  .form-row {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
    width: 100%;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    text-align: center;
    background: #2cb1bc;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  .member-text {
    display: flex;
    width: 60%;
    text-align: center;
    margin: 10px auto;
  }

  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
    display: inline;
    text-decoration: none;
    color: #2cb1bc;
  }
`;
export default Wrapper;
