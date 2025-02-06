<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use App\Http\Resources\EventResource;
use App\Models\Event;
use App\Models\User;
use App\Notifications\EventAssigned;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
   public function index()
   {
       return EventResource::collection(Event::all());
   }

   /**
    * Store a newly created resource in storage.
    *
    * @param  \App\Http\Requests\StoreEventRequest  $request
    * @return \Illuminate\Http\Response
    */
   public function store(StoreEventRequest $request)
   {

       $event = Event::create($request->validated());
        
       //assigned event to the user
       $user = User::find(Auth::id());
       $user->notify(new EventAssigned($event));
       
       return new EventResource($event);
   }

   /**
    * Display the specified resource.
    *
    * @param  \App\Models\Event  $event
    * @return \Illuminate\Http\Response
    */
   public function show(Event $event)
   {
       return new EventResource($event);
   }

   /**
    * Update the specified resource in storage.
    *
    * @param  \App\Http\Requests\UpdateEventRequest  $request
    * @param  \App\Models\Event  $event
    * @return \Illuminate\Http\Response
    */
   public function update(UpdateEventRequest $request, Event $event)
   {
       $event->update($request->validated());

       return new EventResource($event);
   }

   /**
    * Remove the specified resource from storage.
    *
    * @param  \App\Models\Event  $event
    * @return \Illuminate\Http\Response
    */
   public function destroy(Event $event)
   {
       $event->delete();

       return response()->noContent();
   }
}

