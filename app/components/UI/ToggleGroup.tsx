"use client";
import styled from "styled-components";
import { AuctionStatus } from "@/app/utils/auctionHelpers";

interface RadioProp {
  one: string;
  two: string;
  three: string;
  activeTab: AuctionStatus;
  onTabChange: (tab: AuctionStatus) => void;
}

const ToggleGroup = ({
  one,
  two,
  three,
  activeTab,
  onTabChange,
}: RadioProp) => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="option">
          <input
            name="btn"
            type="radio"
            className="input"
            checked={activeTab === "active"}
            onChange={() => onTabChange("active")}
          />
          <div className="btn">
            <span className="span">{one}</span>
          </div>
        </div>

        <div className="option">
          <input
            name="btn"
            type="radio"
            className="input"
            checked={activeTab === "upcoming"}
            onChange={() => onTabChange("upcoming")}
          />
          <div className="btn">
            <span className="span">{two}</span>
          </div>
        </div>

        <div className="option">
          <input
            name="btn"
            type="radio"
            className="input"
            checked={activeTab === "ended"}
            onChange={() => onTabChange("ended")}
          />
          <div className="btn">
            <span className="span">{three}</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 42.3rem;
  margin: 0 auto;

  .wrapper {
    --font-color-dark: rgb(0, 0, 0);
    --font-color-light: rgb(255, 255, 255);
    --bg-color: rgb(255, 255, 255);
    --main-color: #dc5224;
    --secondary-color: rgba(220, 82, 36, 0.57);
    position: relative;
    width: 100%;
    height: 4.25rem;
    background-color: var(--bg-color);
    border-radius: 34px;
    display: flex;
    flex-direction: row;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.26);
    padding: 2px;
    gap: 5px;
  }

  .option {
    flex: 1;
    height: calc(100% - 4px);
    position: relative;
    border-radius: 34px;
    transition: 0.25s cubic-bezier(0, 0, 0, 1);
  }

  .option:last-child {
    margin-right: 0;
  }

  .option:hover {
    box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.16);
  }

  .input {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    appearance: none;
    cursor: pointer;
  }

  .btn {
    width: 100%;
    height: 100%;
    border-radius: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }

  .span {
    color: var(--font-color-dark);
    font-weight: 500;
    transition: 0.25s cubic-bezier(0, 0, 0, 1);
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1rem;
  }

  .input:checked + .btn {
    background-color: var(--main-color);
    transition: 0.2s cubic-bezier(0, 0, 0, 1);
  }

  .input:checked + .btn .span {
    color: var(--font-color-light);
    transition: 0.25s cubic-bezier(0, 0, 0, 1);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .wrapper {
      height: 3.5rem;
      border-radius: 28px;
    }

    .option {
      border-radius: 28px;
    }

    .btn {
      border-radius: 28px;
    }

    .span {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .wrapper {
      height: 3rem;
      border-radius: 24px;
      gap: 3px;
    }

    .option {
      border-radius: 24px;
    }

    .btn {
      border-radius: 24px;
      padding: 0 8px;
    }

    .span {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 360px) {
    .wrapper {
      height: 2.75rem;
      border-radius: 20px;
    }

    .option {
      border-radius: 20px;
    }

    .btn {
      border-radius: 20px;
      padding: 0 6px;
    }

    .span {
      font-size: 0.8rem;
    }
  }
`;

export default ToggleGroup;
