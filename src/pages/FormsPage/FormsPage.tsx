import { useState } from 'react';
import Layout from '../../components/Layout';
import InfoForm from '../../components/InfoForm';
import FormCard from '../../components/FormCard';
import ConfirmMessage from '../../components/ConfirmMessage';
import { useAppSelector } from '../../hooks/redux';
import useActions from '../../hooks/useActions';
import { IFormInfo } from '../../types';
import styles from './FormsPage.module.scss';

function FormsPage() {
  const formCards = useAppSelector((state) => state.formCards.cards);
  const { addFormCard } = useActions();
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (info: IFormInfo) => {
    setShowMessage(true);
    addFormCard(info);
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <Layout title="Forms Page">
      <div data-testid="forms-page">
        <div className={styles.formContainer}>
          <InfoForm onSubmit={handleSubmit} />
        </div>
        <div className={styles.cardsContainer}>
          {formCards.map((card) => (
            <FormCard cardInfo={card} key={card.id} />
          ))}
        </div>
        {showMessage && <ConfirmMessage onClose={handleCloseMessage} />}
      </div>
    </Layout>
  );
}

export default FormsPage;
