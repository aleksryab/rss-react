import { useState } from 'react';
import Layout from '../../components/Layout';
import InfoForm from '../../components/InfoForm';
import { IFormInfo } from '../../types';
import FormCard from '../../components/FormCard';
import styles from './FormsPage.module.scss';
import ConfirmMessage from '../../components/ConfirmMessage';

function FormsPage() {
  const [formCards, setFormCards] = useState<IFormInfo[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (info: IFormInfo) => {
    setFormCards((cards) => [...cards, info]);
    setShowMessage(true);
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
          {formCards.map((card, idx) => (
            <FormCard cardInfo={card} key={idx} />
          ))}
        </div>
        {showMessage && <ConfirmMessage onClose={handleCloseMessage} />}
      </div>
    </Layout>
  );
}

export default FormsPage;
