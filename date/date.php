<?php function monthTranslate($month) {
	switch ($month) {
		case 1: 
		$newName = 'января';
		break;
		case 2:
		$newName = 'февраля';
		break;
		case 3:
		$newName = 'марта';
		break;
		case 4:
		$newName = 'Апреля';
		break;
		case 5:
		$newName = 'мая';
		break;
		case 6:
		$newName = 'июня';
		break;
		case 7:
		$newName = 'июля';
		break;
		case 8:
		$newName = 'августа';
		break;
		case 9:
		$newName = 'сентября';
		break;
		case 10:
		$newName = 'октября';
		break;
		case 11:
		$newName = 'ноября';
		break;
		case 12:
		$newName = 'декабря';
		break;
	}
	
	return $newName;
}

date_default_timezone_set('Europe/Moscow');

$currentDate = new DateTime("now");

// Если время меньше 2 ночи, старт берем со вчера
if ( $currentDate->format('H') > 2 ) :
$currentDate->modify('+1 day');

endif;

$dateDay1Text = $currentDate->format('j');

// Добавляем + 2 дня с момента старта
$currentDate->modify('+3 day');

$dateDay2Text = $currentDate->format('j');

$dateMonthText = monthTranslate( $currentDate->format('n') );
?>