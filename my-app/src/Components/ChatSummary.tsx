import { Card, CardContent, Typography } from "@material-ui/core"
import styles from './ChatSummary.module.sass'

interface IProps {
    userDisplayName: string;
    messageDateTime: Date;
    showTime: boolean;
    content: string;
}
export const ChatSummary: React.FC<IProps> = (props) => {
    return (
        <Card>
            <CardContent>
                <div className={styles.messageHeader}>
                    <Typography color="textSecondary" variant="subtitle2">
                        {props.userDisplayName}
                    </Typography>
                    <Typography color="textSecondary" className={styles.timestamp}>
                        {props.messageDateTime.toLocaleDateString()}
                    </Typography>
                </div>

                <Typography color="textSecondary">
                    {props.content}
                </Typography>

            </CardContent>
        </Card>
    );

}