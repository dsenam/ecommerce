import React, { useEffect, useState } from "react";
import CenterContainer from "../../atoms/CenterContainer";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FeedbackContentStyled } from "./styles";
import { Button } from "../../atoms/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes.constants";

const Feedback: React.FC = () => {
  const params = new URLSearchParams(location.search);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const feedbackCheckout = params.get("checkout");
  const SUCCESS = "success";
  const navigate = useNavigate();
  const FEEDBACK_MESSAGES = {
    SUCCESS: "Pagamento aprovado!",
    ERROR: "Seu pagamento não foi aprovado",
  };

  useEffect(() => {
    if (feedbackCheckout?.match(SUCCESS)) {
      setMessage(FEEDBACK_MESSAGES.SUCCESS);
      setIsSuccess(true);
      return;
    }
    setMessage(FEEDBACK_MESSAGES.ERROR);
  }, [FEEDBACK_MESSAGES.ERROR, FEEDBACK_MESSAGES.SUCCESS, feedbackCheckout]);

  return (
    <CenterContainer>
      <FeedbackContentStyled $success={isSuccess}>
        <h2>{message}</h2>
        <div>{isSuccess ? <FaCheckCircle /> : <FaTimesCircle />}</div>

        <Button
          onClick={() => navigate(ROUTES.HOME)}
          primary
          label="Voltar ao inicío"
        />
      </FeedbackContentStyled>
    </CenterContainer>
  );
};

export default Feedback;
