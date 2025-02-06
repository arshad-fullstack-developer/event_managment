<?php

namespace App\Notifications;

use App\Models\Event;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;

class EventAssigned extends Notification
{
    private $event;

    public function __construct(Event $event)
    {
        $this->event = $event;
    }

    public function via($user)
    {
        return ['mail'];
    }

    public function toMail($user)
    {
        return (new MailMessage)
                    ->from('noreply@example.com', 'Event Management') 
                    ->subject('Event Assigned to You')
                    ->line('You have been assigned to the event: ' . $this->event->title)
                    ->line('Event Description: ' . $this->event->description)
                    ->line('Event Date: ' . $this->event->date)
                    ->line('Location: ' . $this->event->location)
                    ->action('View Event', url('/events/'.$this->event->id.'/show'));
    }
}

