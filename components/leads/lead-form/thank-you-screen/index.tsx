import {FC} from 'react';
import {
	ThankYouContainer,
	ThankYouFooter,
	ThankYouText,
	ThankYouTitle,
} from '@/components/leads/lead-form/thank-you-screen/styles';
import {Button} from '@/styles/button';
import Image from 'next/image';

export interface ThankYouScreenProps {
	resetForm: () => void;
}
export const ThankYouScreen: FC<ThankYouScreenProps> = ({resetForm}: ThankYouScreenProps) => {
	return (
		<ThankYouContainer>
			<Image src="/info.jpg" alt="Thank you image" width={64} height={64} />
			<ThankYouTitle>
				Thank You
			</ThankYouTitle>
			<ThankYouText>
				Your information was submitted to our team of immigration attorneys. Expect an email from{" "}
				<span>hello@tryalma.ai</span>
			</ThankYouText>
			<ThankYouFooter>
				<Button onClick={resetForm}>
					Go Back to Homepage
				</Button>
			</ThankYouFooter>
		</ThankYouContainer>
	);
}
