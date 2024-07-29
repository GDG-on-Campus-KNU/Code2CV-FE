import type { FC } from 'react';
import { Button } from '@/components/common';

export const HomePage: FC = () => {
    return (
        <div>
            <Button size="large" variant="primary">
                버튼
            </Button>
            <Button size="large" variant="secondary">
                버튼
            </Button>
            <Button size="large" variant="disabled">
                버튼
            </Button>
            <Button size="large" variant="completed">
                버튼
            </Button>
        </div>
    );
};
