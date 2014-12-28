<?php
/**
 * This file is part of GameQ.
 *
 * GameQ is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * GameQ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Garry's Mod Protocol Class
 *
 * @author Austin Bischoff <austin@codebeard.com>
 */
class GameQ_Protocols_Gmod extends GameQ_Protocols_Source
{
    //Game or Mod
    protected $name = "gmod";
    protected $name_long = "Garry's Mod";
    protected $name_short = "GMOD";

    //Basic Game
    protected $basic_game_dir = 'garrysmod';

    //Settings
    protected $goldsource = false;
    protected $is_mod = false;
    protected $modlist = array();
}