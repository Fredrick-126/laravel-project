<?php

namespace App\Http\Controllers\Linkedin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AnalyticsController extends Controller
{
    /**
     * 
     * Get insights of Linkedin pages
     */
    public function pageInsightsByType($type, Request $request)
    {
        $user = auth()->user();
        $channel = $user->channels()->find($request->id);

        try{
            if($channel){
                $channel = $channel->details;
                return response()->json($channel->pageInsightsByType($type, $request->startDate, $request->endDate));
            }
        }catch(\Exception $e){
            return getErrorResponse($e, $channel->global);
        }

        return response()->json(['error' => 'No channel found'], 404);
    }
}